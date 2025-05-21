import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import PageMeta from "../../components/common/PageMeta";
import TabNavigation from "../../components/common/TabNavigation";
import InfoCards from "../../components/ecommerce/InfoCards";
import OrderStatus from "../../components/ecommerce/OrderStatus";
import RecentActivity from "../../components/ecommerce/RecentActivity";
import RecentOrdersTable from "../../components/ecommerce/RecentOrdersTable";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Quotient Admin"
        description="This is the admin dashboard for Quotient"
      />
      <TabNavigation />
      <div className="grid grid-cols-12 gap-4 md:gap-6 bg-white p-4 border-r border-b border-l border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:text-white-300 dark:border-t dark:border-t-gray-800">
        <div className="col-span-12 space-y-6">
          <InfoCards />
        </div>

        <div className="col-span-6 space-y-6">
          <OrderStatus />
        </div>

        <div className="col-span-6 space-y-6">
          <RecentActivity />
        </div>

        <div className="col-span-12 space-y-6">
          <RecentOrdersTable />
          <MonthlySalesChart />
        </div>
      </div>
    </>
  );
}
