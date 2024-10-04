import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/NavBar';

export default function Privacy() {
  return (
    <>
      <div className='isolate bg-white'>
        <Navbar />
        <main>
          <div className='relative px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl py-32'>
              <div className='text-center'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                  Privacy Policy
                </h1>
              </div>
            </div>
          </div>
        </main>
        <div className='mx-auto max-w-2xl text-justify'>
          By accessing or using the Website or the Application, you agree to the
          terms of this Privacy Policy. If you do not agree with the practices
          described in this policy, please do not use the Website or the
          Application.
          <br />
          <br />
          1. Information We Collect
          <br />
          1.1 Personal Data
          <br />
          We collect the following personal information from you:
          <br />
          Name: We collect your name to personalize your experience and
          communicate with you effectively.
          <br />
          Email: We collect your email address to send you important information
          regarding your orders, updates, and communication.
          <br />
          Payment Information: We collect payment details to process your orders
          securely. However, we do not store your payment information on our
          servers. Payments are processed by trusted third-party payment
          processors.
          <br />
          <br />
          1.2 Non-Personal Data
          <br />
          We may also collect non-personal information through web cookies and
          general Application usage statistics which may include details such as
          your device's Internet Protocol ("IP") address, browser version, pages
          of our Service that you visit, the time and date of your visit, the
          amount of time spent on those pages, and other statistics.
          <br />
          <br />
          2. Purpose of Data Collection
          <br />
          The information we collect is used for the following purposes:
          <br />
          Order Processing: To manage transactions and maintain records of
          purchased licenses. Product Improvement: To enhance the functionality
          and user experience of ShipiOS based on usage statistics and feedback.
          <br />
          <br />
          3. Data Sharing
          <br />
          We do not share your personal data with any third parties except as
          required for order processing (e.g., sharing your information with
          payment processors). We do not sell, trade, or rent your personal
          information to others.
          <br />
          <br />
          4. Children's Privacy
          <br />
          ShipiOS is not intended for children under the age of 13. We do not
          knowingly collect personal information from children. If you are a
          parent or guardian and believe that your child has provided us with
          personal information, please contact us at the email address provided
          below.
          <br />
          <br />
          5. Updates to the Privacy Policy
          <br />
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. Any updates will be posted on this page, and we may notify
          you via email about significant changes.
          <br />
          <br />
          6. Contact Information
          <br />
          If you have any questions, concerns, or requests related to this
          Privacy Policy, you can contact us at:
          <br />
          Email: info@shipios.app
          <br />
          By using our Website or our Application, you consent to the terms of
          this Privacy Policy.
        </div>
      </div>
      <Footer />
    </>
  );
}
