import log from 'loglevel';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost'
    || window.location.hostname === '[::1]'
    || window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/,
    ),
);

const registerValidSW = async (swUrl, config) => {
  try {
    log.trace('Register valid service worker...');
    const registration = await navigator.serviceWorker.register(swUrl);
    log.trace('Register valid service worker done.');

    log.trace('Configure on update found...');
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (!installingWorker) {
        return;
      }

      log.trace('Configure on state change...');
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            log.trace('New content available during next visit.');

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            log.trace('Content is cached.');

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
      log.trace('Configure on state change done.');
    };
    log.trace('Configure on update found done.');
  } catch (error) {
    log.error('Register valid service worker failed.');
    log.error(error);
  }
};

const checkValidServiceWorker = async (swUrl, config) => {
  try {
    log.trace('Fetch service worker...');
    const response = await fetch(swUrl);
    log.trace('Fetch service worker done.');

    log.trace('Check valid service worker...');
    const contentType = response.headers.get('content-type');
    if (response.status !== 404
        && contentType && contentType.includes('javascript')) {
      log.trace('Valid service worker found.');
      await registerValidSW(swUrl, config);

      return true;
    }
    log.trace('Check valid service worker done.');

    log.trace('No service worker found. Unregister and reload App.');
    const registration = await navigator.serviceWorker.ready;
    await registration.unregister();
    window.location.reload();

    return true;
  } catch (error) {
    log.error('No internet connection, using offline mode.');
    log.error(error);

    return false;
  }
};

export const register = (config) => {
  if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) {
    log.trace('Register canceled, only available in production.');

    return false;
  }

  const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
  if (publicUrl.origin !== window.location.origin) {
    log.trace('Register canceled, public url is different than location origin.');

    return false;
  }

  log.trace('Start register worker...');
  window.addEventListener('load', async () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (!isLocalhost) {
      try {
        await registerValidSW(swUrl, config);
      } catch (error) {
        log.error('Start register failed.');

        return false;
      }

      return true;
    }

    try {
      await checkValidServiceWorker(swUrl, config);
      await navigator.serviceWorker.ready;
      log.info('Web app is cache-first by a service worker.');

      return true;
    } catch (error) {
      log.error('Start register failed.');

      return false;
    }
  });
  log.trace('Start register worker done.');

  return true;
};

export const unregister = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready;

    return registration.unregister();
  }

  return true;
};
