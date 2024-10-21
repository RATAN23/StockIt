"use client"
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react"
import StatCard from "./StatCard"
import CardPopularProducts from "./carPopularProducts" 
import CardExpenseSummary from "./cardExpenseSummary"
import CardPurchaseSummary from "./cardPurchaseSummary"
import CardSalesSummary from "./cardSalesSummary"
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
       <CardPopularProducts/>
       <CardSalesSummary/>
       <CardPurchaseSummary/>
       <CardExpenseSummary/>
      <StatCard
        title = "Customer and Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6"/>}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title : "Customer Growth",
            amount : "155.90",
            changePercentage : 122,
            IconComponent : TrendingUp,
          },
          {
            title : "Expenses",
            amount : "12.90",
            changePercentage : -23,
            IconComponent : TrendingDown  ,
          }
        ]}
      />
       <StatCard
        title = "Dues and Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6"/>}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title : "Dues",
            amount : "150.90",
            changePercentage : 122,
            IconComponent : TrendingUp,
          },
          {
            title : "Pending Orders",
            amount : "123",
            changePercentage : -23,
            IconComponent : TrendingDown  ,
          }
        ]}
      />
       <StatCard
        title = "Sales and Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6"/>}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title : "Sales",
            amount : "1200.00",
            changePercentage : 20,
            IconComponent : TrendingUp,
          },
          {
            title : "Discount",
            amount : "240",
            changePercentage : -13,
            IconComponent : TrendingDown  ,
          }
        ]}
      />
     
    </div>
  )
}

export default Dashboard