const HomeScreen = (props) => {
    return (
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1>WELCOME TO YOUR GIPHY</h1>
        <img
          src="https://logovtor.com/wp-content/uploads/2021/05/giphy-logo-vector.png" // Replace with the actual path to the GIPHY logo image
          alt="GIPHY Logo"
          style={{ width: '200px', marginTop: '20px' }}
        />
        <a
          href="#" // Add the URL you want to link to
          style={{ textDecoration: 'none', color: 'black', display: 'block', marginTop: '30px' }}
          onClick={(e) => {e.preventDefault(); props.toggleHome("iron man")}}
        >
          IRON MAN GIPHY
        </a>
        <a
          href="#" // Add the URL you want to link to
          style={{ textDecoration: 'none', color: 'black', display: 'block', marginTop: '30px' }}
          onClick={(e) => {e.preventDefault(); props.toggleHome("")}}
        >
          SEARCH YOUR GIPHY
        </a>
      </div>
    );
  };
  
  export default HomeScreen;