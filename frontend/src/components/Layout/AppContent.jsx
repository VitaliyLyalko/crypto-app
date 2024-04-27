import { Layout, Typography } from "antd";
import { useCrypto } from "/src/components/context/crypto-context.jsx";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
  padding: '1rem',
};

export default function AppContent() {
	const {assets, crypto} = useCrypto()

const criptoPriceMap = crypto.reduce((acc, c) => {
	acc[c.id] = c.price
	return acc
}, {})


  return (
    <Layout.Content style={contentStyle}>
      <Typography.Text level={3} style={{ textAlign: "left", color: "#fff" }}>
        Portfolio:{" "}
        {assets
          .map((asset) => asset.amount * criptoPriceMap[asset.id])
          .reduce((acc, v) => (acc += v), 0)
          .toFixed(2)}
        $
      </Typography.Text>
		<PortfolioChart />
		<AssetsTable />
    </Layout.Content>
  );
}
