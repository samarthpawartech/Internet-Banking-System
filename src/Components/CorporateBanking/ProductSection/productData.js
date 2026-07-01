import corporate from "../../../assets/Corporate Banking/corporate Banking products/Corporate-Net-Banking.jpg";
import trade from "../../../assets/Corporate Banking/corporate Banking products/Trade-Finance.jpg";
import api from "../../../assets/Corporate Banking/corporate Banking products/API-banking.png";
import pay from "../../../assets/Corporate Banking/corporate Banking products/Smart-pay.jpg";

export const products = [
  {
    id: 1,
    title: "Corporate Net Banking",
    description:
      "One Stop Digital Business Banking Portal, Salary Payments, Tax & Bill Payments.",
    image: corporate,
    color: "linear-gradient(135deg,#fff3ec,#ffe4d4)",
  },
  {
    id: 2,
    title: "Smart Trade",
    description:
      "Manage Trade Remittances, BG, LC, Regulations and Trade Finance.",
    image: trade,
    color: "linear-gradient(135deg,#fff6df,#f7e2b4)",
  },
  {
    id: 3,
    title: "API Banking",
    description:
      "Integrate banking services directly with your ERP using secure APIs.",
    image: api,
    color: "linear-gradient(135deg,#fffce4,#fff4bf)",
  },
  {
    id: 4,
    title: "Smart Pay",
    description:
      "Comprehensive Collection Stack, Payment Link, QR, RTGS, NEFT & UPI.",
    image: pay,
    color: "linear-gradient(135deg,#eef0ff,#dde0ff)",
  },
];
