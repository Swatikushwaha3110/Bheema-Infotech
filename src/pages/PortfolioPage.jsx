import { useParams, Link } from "react-router-dom";
import OnePage from "../pages/OnePage"
import TwoPage from "../pages/TwoPage"
import ThirdPage from "../pages/ThirdPage"
import FourPage from "../pages/FourPage"

const PortfolioPage = () => {
  const { pageId } = useParams();

  const renderPage = () => {
    switch (pageId) {
      case "1":
        return <OnePage />;
      case "2":
        return <TwoPage />;
      case "3":
        return <ThirdPage />;
      case "4":
        return <FourPage />;
      default:
        return <OnePage />;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between p-0 m-0 overflow-hidden">

      {/* ✅ Content always stays at top */}
      <div className="flex-1 p-0 m-0">
        {renderPage()}
      </div>

      {/* ✅ Pagination sticks at bottom, NO EMPTY GAP */}
      <div className="w-full flex justify-center gap-2 py-4 bg-white border-t">
        <Link to="/portfolio" className="px-4 py-2 bg-gray-200 hover:bg-blue-500 hover:text-white rounded">
          1
        </Link>
        <Link to="/portfolio/2" className="px-4 py-2 bg-gray-200 hover:bg-blue-500 hover:text-white rounded">
          2
        </Link>
        <Link to="/portfolio/3" className="px-4 py-2 bg-gray-200 hover:bg-blue-500 hover:text-white rounded">
          3
        </Link>
        <Link to="/portfolio/4" className="px-4 py-2 bg-gray-200 hover:bg-blue-500 hover:text-white rounded">
          4
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPage;
