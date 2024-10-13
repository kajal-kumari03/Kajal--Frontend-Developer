import React from 'react';
import './Rodmap.css'; // Import your CSS for styling

const Navbar = () => {
  return (
    <div>
      {/* -------------------------------------------Road Map------------------------------------------------ */}
      <div className='roadmap'>
        <div className='roadmap1'><h2 className='tt'>Roadmap</h2></div>
        <div className='kickingoff'>
          <div className='kl'>
            <button className='b1'>Phase </button>
            <h2 className='ko'>Kicking Off</h2>
            <ul>
              <li>Launch of EthAi</li>
              <li>Development of Core AI Agents</li>
              <li>User Onboarding Campaign</li>
              <li>Community Engagement Initiatives</li>
            </ul>
          </div>
          <div className='kr'>
            <video className='kv' src='https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/037f/7f94/-dbe5-4e84-a0d0-34a0193e07d6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eM4i89cT0EJLQ49khHxjzPae44XSB9w63wQa6rORhPrzphN3BtxunBXO--s6tcRH895EIDtekvf1VqGNcGO4U7njl1k5j5JquXD7LAZGLiEasFuYc-Q1RyO5TKQmVX5GSbRuDDzLdoyG7k~-KAazGsk~Nc7YRTNK5Dz69BR5uP5e5DLjmaHXf1AwzBOI6YB70L9U3~iCCrJIgJ5cwoveC6NonfYVhQCBTpSqJms1XtQjoo-ZJm7-2mk4TktMwJULpKDqoyzQZU7z87xfjVivChwW4VxRcR8LwBZdwdwuckG5~9KF7LFZIv-sZ7yddWRnmatbsYXBEv28h1RmPC-HxA__' />
          </div>
        </div>

        <div className='biggerinsights'>
          <div className='bl'>
            <video className='bv' src='https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/cb86/a228/-0cff-4aa8-9d9a-c49552d1766c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ng05S9ao8zXQU2qAK7d0Q2SHfp7HPqm2flM0GxxNEZkJ~gG7QzPOJAPCDB6IfXmV49XHXpmzojD1zAdqdWCvAp1CW27Zu4AMWxPVRb~c4hxqSi6aCjeqUA8WbO-skAT8w1bm9NC3k-PbWOACCVaPg1SR4tqhRycuZ07sNXfyr6eTTRvgIq8mcjIxW9I9hoUYkds-eHp9VjsAK1smsn90ozZ8yqgqQlNnrvFHpCnFwr-izY6bHffdUdOchxSNQvfWCb7L2LXQhwYq~rIvUv8y4H2b5zZQ8176p4~A6ULgGsGybPe-rSzhO5Bt1dGA3u~ijHnOBVTN~qA9UYKAzAu1gg__' />
         
          </div> 
          <div className='br'>
            <button className='b1'>Phase </button>
            <h2>Bigger Insight</h2>
            <ul>
              <li>Introduction of advanced AI Agents</li>
              <li>Strategic Partnerships</li>
              <li>User Interface Optimization</li>
              <li>Comprehensive Marketing Campaign</li>
            </ul>
          </div>
        </div>

        <div className='fullpower'>
          <div className='fl'>
            <button className='b1'>Phase </button>
            <h2>Full Power</h2>
            <ul>
              <li>Launch of AI-Powered Tools</li>
              <li>Expansion of AI Agents</li>
              <li>API Integration for Data Access</li>
            </ul>
          </div>
          <div className='fr'>
            <video className='fv' src='https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/86e0/aff1/-c5e4-4b3f-b0ee-214e16d683f4?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aOQHLlqT3DJileOvM3lAL2gABNJS4CR5akXA57rACCUr-PecfKVN9~FSgnpkC-M5~LhN6ntWFFWybnZk600HcOO7MQkm3B5VwXK6euAoo85AXvB6uVkzdzEBOEXQkicU4CyoPoGpEkS3XyFdYb5i~6~LE~zwan-Dg-pHy5oQ01jSUk37aKFq8FsAUexXVt2wph-1uiXcEgSvv3WQJF7JreLgh90uibzTkoilsFJ5v1i8D30zmXeyqJKY00kSsmrRRD86r3aqEfNHCGYfBgIXn2B7LaVd4MZj5Co5FNfuTcebvAhaMOkBMaybC80EfYjWVj7lE4NvHGI-1qtsoj7O0A__' />
          </div>
        </div>
      </div>

      {/* --------------------------------------FAQ Section---------------------------------------- */}
      <div className='faq'>
        <div className='f1'>
          <div className='ql'>
            <h2 className='qh2'>Frequently Asked Questions</h2>
          </div>
          <div className='qr'>
            <ul>
              <li>What is EthAi?</li>
              <li>How can EthAi help me as a Trader?</li>
              <li>How can I get started with EthAi?</li>
              <li>Who can use EthAi?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ----------------------------Explore Our dApp Section---------------------------- */}
      <div className='mind'>
        <div className='inside'>
            
          <h3>Explore Our <span className='dapp'>dApp</span></h3>
          <p className='para.'>
            EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions.<br></br> By tracking smart money flows, monitoring key wallets, and providing real-time market<br></br> insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI<br></br> features for asset recommendations, market analysis, and personalized crypto Q&A,<br></br> making it the ultimate tool for both novice and experienced traders.
          </p>
          <button className='openbutton'>Open dApp</button>
          </div>
        </div>
    

      {/* -----------------------------------Footer Section----------------------------------- */}
      <div className='footer'>
        <div className='footlogo'></div>
        <div className='social'>
        <a href="https://instagram.com/your_instagram_handle" target="_blank">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://twitter.com/your_twitter_handle" target="_blank">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://facebook.com/your_facebook_handle" target="_blank">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://telegram.me/your_telegram_channel" target="_blank">
          <i className="fa fa-telegram"></i>
        </a>
        </div>
        <div className='text'>
          <h3>"Designed for traders of today, just like you."</h3>
        </div>
        <div>
          <label>What's your work email?</label>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
