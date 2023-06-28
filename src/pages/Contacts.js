import img from "img/contact.png"

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        {/* <h1 className="title-1">Contacts</h1> */}

        <ul className="content-list">
<li className="content-list__item">
<img src={img} className="content-list__image" alt=""/>
</li>
          <li className="content-list__item">
            <h2 className="title-2">Phone</h2>
            <p>
              <a href="tel:+380672098165">+38 067 209 81 65</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:antonkobyshev@gmail.com">antonkobyshev@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;