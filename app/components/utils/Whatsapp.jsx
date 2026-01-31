import { products } from "../Data/ProductPrice";

export default function generateProductListMessage() {
  let message = `Hello!
  Thank you for contacting us.
  Please find our product list below:\n\n`;

  products.forEach((product, index) => {
    message += `${index + 1}. ${product.name}\n`;
  });

  message += `📌 Note:
  • Site visit charges are applicable
  • Final pricing may vary based on requirements
    Looking forward to assisting you.`;

  return encodeURIComponent(message);
}
