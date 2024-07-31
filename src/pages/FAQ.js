import React, { useState } from 'react';
import '../assets/scss/blocks/FAQ.scss';
import SectionTitle from '../components/ui/section-titles/SectionTitle';

const faqData = [
  {
    question: "Register user in the OBC website",
    answer: "Create an account in OBC website www.onebond.org",
  },
  {
    question: "Download Metamask Wallet",
    answer: "If you are using a desktop computer, you can download Google Chrome and the wallet Chrome extension. If you prefer using your mobile phone, you can download the wallet via Google Play or the iOS App Store if it’s available. Just make sure that you are downloading the official Chrome extension and mobile app by visiting Metamask’s website.",
  },
  {
    question: "Set up your Metamask Wallet ",
    answer: "Register and set up the crypto wallet via the wallet’s Google Chrome extension or via the mobile app you downloaded in Step 1. You may refer to the wallet’s support page for reference. Make sure to keep your seed phrase safe, and take note of your wallet address.",
  },
  {
    question: "Connect your Metamask wallet address to the OBC account ",
    answer: "The Metamask wallet address has to be connected to the OBC account created in the OBC website www.onebond.org.",
  },
  {
    question: "Buy USDT ",
    answer: "Once your wallet is setup, you can login and proceed to buy USDT.",
  },
  {
    question: "Place order for OBC",
    answer: "Select the number of OBC to be purchased through the OBC account and wait for order confirmation from OBC",
  },
  {
    question: "Make Payment for OBC purchase",
    answer: "Payment in USDT from Metamask wallet has to be made for the OBC purchase. The OBC will be transferred to your wallet within 8 hours from the time of receiving payment confirmation.",
  },
  {
    question: "What happens when OBC’s are lost?",
    answer: "When a user loses his wallet, it has the effect of removing money out of circulation. Lost OBCs still remain in the block chain just like any other OBCs. However, lost OBCs remain dormant forever because there is no way for anybody to find the private key(s) that would allow them to be spent again. ",
  },
  {
    question: "Is OBC secure?",
    answer: "The OBC technology - the protocol and the cryptography - has a strong security track record, and in the future OBC network aims to be the biggest distributed computing project in the world. OBC's most common vulnerability is in user error. OBC wallet files that store the necessary private keys can be accidentally deleted, lost or stolen. This is pretty similar to physical cash stored in a digital form. Fortunately, users can employ sound security practices to protect their money or use service providers that offer good levels of security and insurance against theft or loss. ",
  },
  {
    question: "Is OBC legal?",
    answer: "To the best of our knowledge, OBC has not been made illegal by legislation in most jurisdictions. However, some jurisdictions (such as Argentina and Russia) severely restrict or ban foreign currencies. Other jurisdictions (such as Thailand) may limit the licensing of certain entities. Regulators from various jurisdictions are taking steps to provide individuals and businesses with rules on how to integrate this new technology with the formal, regulated financial system. For example, the Financial Crimes Enforcement Network (FinCEN), a bureau in the United States Treasury Department, issued non-binding guidance on how it characterizes certain activities involving virtual currencies.",
  },

];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <SectionTitle
        title="FAQ"
        text="Quick answers to common queries about our project. This section helps newcomers and existing users understand our coin's features, benefits, and how to get involved."
      />
    <div className="faq-container">
      
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
