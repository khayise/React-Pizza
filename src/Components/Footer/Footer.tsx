import React from 'react';
import style from './Footer.module.scss';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.wrapperTop}>
          <div>
            At React Pizza, we are committed to providing our customers with the best pizza
            experience. We use only the freshest ingredients, and our pizzas are made to order.
            Delivery times may vary based on location, traffic, and demand. We strive to deliver
            within the estimated time, but delays may occur. We do not accept returns of delivered
            food items. We take special requests seriously. However, our kitchen handles ingredients
            that may come in contact with common allergens. Please inform us of any allergies when
            placing your order. Your feedback is important to us! Feel free to share your experience
            through our website or contact us directly with any concerns. We thank you for choosing
            React Pizza and look forward to serving you!
          </div>
          <div>
            <span className={style.phoneNumber}>+49 15 120 484 176</span>
            <span className={style.callLabel}>Call us</span>
          </div>
        </div>
        <div className={style.wrapperBottom}>
          <span className={style.name}>
            React Pizza &copy; 2024. Created by {''}
            <a href="https://github.com/khayise" target="_blank" rel="noopener noreferrer">
              <span className={style.creator}>Andrii Dedesh</span>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};
