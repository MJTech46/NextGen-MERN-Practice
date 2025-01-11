import React from "react";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">MJTech46</h1>
        <div className="header-buttons">
          <button className="button login-button">Log In</button>
          <button className="button signup-button">Sign Up</button>
        </div>
      </header>




      <nav className="navigation">
        <div className="navigation-buttons">
          <button className="button home-button">Home</button>
          <button className="button product-button">Products</button>
          <button className="button shopping-button">Shopping</button>
          <button className="button contact-button">Contact</button>
          <button className="button blog-button">Blog</button>
        </div>
      </nav>




      <div className="app-container">
        {/* Section 1 */}
        <div className="section section-one">
          <h2>Section 1: Images and Border</h2>
          <div className="images-container">
            <img src="https://picsum.photos/id/1/200/300" alt="image 1" />
            <img src="https://picsum.photos/id/2/200/300" alt="image 2" />
            <img src="https://picsum.photos/id/3/200/300" alt="image 3" />
          </div>
          <p>
            This is section 1, which contains three images. The border type used here is a solid border, which surrounds this section and gives it a clean and defined structure.
          </p>
        </div>

        {/* Section 2 */}
        <div className="section section-two">
          <h2>Section 2: Border and Card Design</h2>
          <div className="card">
            <h3>Card Title</h3>
            <p>This is a sample card in section 2. You can place more content here.</p>
          </div>
          <div className="images-container">
            <img src="https://picsum.photos/id/4/200/300" alt="image 4" />
            <img src="https://picsum.photos/id/5/200/300" alt="image 5" />
            <img src="https://picsum.photos/id/6/200/300" alt="image 6" />
          </div>
          <p>
            This section has a dashed border and a card element. You can see the usage of card-like UI components in the section alongside images with a dashed border.
          </p>
        </div>

        {/* Section 3 */}
        <div className="section section-three">
          <h2>Section 3: Gradient Border</h2>
          <div className="images-container">
            <img src="https://picsum.photos/id/7/200/300" alt="image 7" />
            <img src="https://picsum.photos/id/8/200/300" alt="image 8" />
            <img src="https://picsum.photos/id/9/200/300" alt="image 9" />
          </div>
          <p>
            In section 3, we use a gradient border to create a colorful effect. The gradient adds a vibrant touch to the overall section.
          </p>
        </div>

        {/* Section 4 */}
        <div className="section section-four">
          <h2>Section 4: Video and Audio</h2>
          <div className="media-container">
            <video name="media" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" controls width="400px"></video>
            <audio controls>
              <source src="https://www2.cs.uic.edu/~i101/SoundFiles/Fanfare60.wav" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <p>
            Section 4 contains both a video and audio player. You can interact with these media elements to experience multimedia content directly within the page.
          </p>
        </div>

        {/* Section 5 */}
        <div className="section section-five">
          <h2>Section 5: Shadow Effect</h2>
          <div className="images-container">
            <img src="https://picsum.photos/id/10/200/300" alt="image 10" />
            <img src="https://picsum.photos/id/11/200/300" alt="image 11" />
            <img src="https://picsum.photos/id/12/200/300" alt="image 12" />
          </div>
          <p>
            This section features a shadow effect on the border, adding depth and a 3D appearance to the section content.
          </p>
        </div>

        {/* Section 6 */}
        <div className="section section-six">
          <h2>Section 6: Hover Effects</h2>
          <div className="images-container">
            <img src="https://picsum.photos/id/13/200/300" alt="image 13" />
            <img src="https://picsum.photos/id/14/200/300" alt="image 14" />
            <img src="https://picsum.photos/id/15/200/300" alt="image 15" />
          </div>
          <p>
            Section 6 utilizes hover effects. As you hover over the images, the opacity changes, giving the page an interactive feel.
          </p>
        </div>

        {/* Section 7 */}
        <div className="section section-seven">
          <h2>Section 7: Border with Multiple Colors</h2>
          <div className="images-container">
            <img src="https://picsum.photos/id/16/200/300" alt="image 16" />
            <img src="https://picsum.photos/id/17/200/300" alt="image 17" />
            <img src="https://picsum.photos/id/18/200/300" alt="image 18" />
          </div>
          <p>
            In section 7, a multi-color border is used to add a playful and vibrant effect to the section, making it stand out.
          </p>
        </div>

        {/* Section 8 */}
        <div className="section section-eight">
          <h2>Section 8: Card with Animation</h2>
          <div className="card animated-card">
            <h3>Card Title</h3>
            <p>This card has an animation applied to it, making it move slightly when hovered over.</p>
          </div>
          <div className="images-container">
            <img src="https://picsum.photos/id/19/200/300" alt="image 19" />
            <img src="https://picsum.photos/id/20/200/300" alt="image 20" />
            <img src="https://picsum.photos/id/21/200/300" alt="image 21" />
          </div>
          <p>
            In this section, we see a card that moves slightly when hovered over. It is accompanied by images with a clean border effect.
          </p>
        </div>

        {/* Section 9 */}
        <div className="section section-nine">
          <h2>Section 9: Bordered Cards</h2>
          <div className="card">
            <h3>Card Title 1</h3>
            <p>This is card 1 with a solid border.</p>
          </div>
          <div className="card">
            <h3>Card Title 2</h3>
            <p>This is card 2 with a dotted border.</p>
          </div>
          <div className="images-container">
            <img src="https://picsum.photos/id/22/200/300" alt="image 22" />
            <img src="https://picsum.photos/id/23/200/300" alt="image 23" />
            <img src="https://picsum.photos/id/24/200/300" alt="image 24" />
          </div>
          <p>
            Section 9 uses cards with different border styles, and they each contain a small description inside.
          </p>
        </div>

        {/* Section 10 */}
        <div className="section section-ten">
          <h2>Section 10: Final Thoughts</h2>
          <div className="images-container">
            <img src="https://picsum.photos/id/25/200/300" alt="image 25" />
            <img src="https://picsum.photos/id/26/200/300" alt="image 26" />
            <img src="https://picsum.photos/id/27/200/300" alt="image 27" />
          </div>
          <p>
            Section 10 wraps up the content. It is styled with a clean border and houses multiple images with clear separation between each image.
          </p>
        </div>

        {/* Chat Support Icon */}
        <div className="chat-support">
          <a href="#" className="chat-icon">
            <img width="64" height="64" src="https://img.icons8.com/skeuomorphism/64/chat.png" alt="chat" />
          </a>
        </div>
      </div>








      <footer style={{ backgroundColor: '#232f3e', color: 'white', padding: '20px 0', fontSize: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {/* Section 1: About */}
          <div>
            <h3>Get to Know Us</h3>
            <ul>
              <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Amazon</a></li>
              <li><a href="/careers" style={{ color: 'white', textDecoration: 'none' }}>Careers</a></li>
              <li><a href="/press" style={{ color: 'white', textDecoration: 'none' }}>Press Releases</a></li>
              <li><a href="/amazon-devices" style={{ color: 'white', textDecoration: 'none' }}>Amazon Devices</a></li>
            </ul>
          </div>

          {/* Section 2: Make Money with Us */}
          <div>
            <h3>Make Money with Us</h3>
            <ul>
              <li><a href="/sell" style={{ color: 'white', textDecoration: 'none' }}>Sell on Amazon</a></li>
              <li><a href="/affiliate" style={{ color: 'white', textDecoration: 'none' }}>Affiliate Program</a></li>
              <li><a href="/advertising" style={{ color: 'white', textDecoration: 'none' }}>Advertise Your Products</a></li>
              <li><a href="/business" style={{ color: 'white', textDecoration: 'none' }}>Business Services</a></li>
            </ul>
          </div>

          {/* Section 3: Amazon Payment */}
          <div>
            <h3>Amazon Payment</h3>
            <ul>
              <li><a href="/pay" style={{ color: 'white', textDecoration: 'none' }}>Payment Methods</a></li>
              <li><a href="/order-history" style={{ color: 'white', textDecoration: 'none' }}>Order History</a></li>
              <li><a href="/returns" style={{ color: 'white', textDecoration: 'none' }}>Returns & Replacements</a></li>
            </ul>
          </div>

          {/* Section 4: Let Us Help You */}
          <div>
            <h3>Let Us Help You</h3>
            <ul>
              <li><a href="/customer-service" style={{ color: 'white', textDecoration: 'none' }}>Customer Service</a></li>
              <li><a href="/track-orders" style={{ color: 'white', textDecoration: 'none' }}>Track Your Order</a></li>
              <li><a href="/shipping" style={{ color: 'white', textDecoration: 'none' }}>Shipping Rates & Policies</a></li>
              <li><a href="/returns" style={{ color: 'white', textDecoration: 'none' }}>Returns & Refunds</a></li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px' }}>
          <p>© 2025 Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </>
  );
}

export default App;