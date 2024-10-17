/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { DonateItem } from "../modules/custom/DonateItem";
import { CustomApp } from "../CustomApp";
import { TransactionsLog } from "../modules/custom/TransactionLogs";
import { DonateView } from "../modules/custom/DonateView";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env;

const CustomAppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<CustomApp />}>
          <Route path="transactions" element={<TransactionsLog />} />
          <Route path="donate/:uid" element={<DonateItem />} />
          <Route path="donate" element={<DonateView />} />
          <Route path="*" element={<Navigate to="/donate" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { CustomAppRoutes };
