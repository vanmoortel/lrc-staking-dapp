import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { SuspenseLoading } from '../../../components';
import languageProvider from '../../../translations';

const Dashboard = lazy(() => import('../../Dashboard'));
const Web3SignIn = lazy(() => import('../../Dashboard/Web3SignIn'));
const ContractManager = lazy(() => import('../../Dashboard/ContractManager'));

/*
 *
 * Router with all route available
 *
 */
const Router = () => {
  const language = useSelector((state) => state.settings.language);

  const pageVariants = {
    in: {
      opacity: 1,
      scale: 1,
    },
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    duration: 0.4,
    ease: 'anticipate',
    type: 'tween',
  };

  const messages = languageProvider[language];

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading messages={messages} />}>
          <Switch>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Route path="/">
                <Dashboard>
                  <Switch>
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Route component={Web3SignIn} path="/login" />
                      <Route component={ContractManager} exact path="/" />
                    </motion.div>
                  </Switch>
                </Dashboard>
              </Route>
            </motion.div>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default Router;
