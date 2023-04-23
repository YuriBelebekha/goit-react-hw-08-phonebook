import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <h1>
        Create your PHONEBOOK
      </h1>

      <p>
        Use our web application to access your contacts from any browser. Use it to make bulk edits, set-up an integration, or just get quick access to the contacts you need.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellat. Iusto, repellat architecto vitae blanditiis eligendi dolores modi? Nam, neque. Omnis aut eaque, provident amet voluptatum veniam voluptates incidunt accusamus!
      </p>
      <p>
        Voluptas pariatur blanditiis praesentium repellat quod, amet ab quisquam, exercitationem porro veniam inventore perferendis eius sequi ullam, dignissimos soluta quam numquam voluptatum asperiores veritatis dolorem nisi unde! Non, molestias totam?        
      </p>
      <p>
        Esse soluta dolore doloremque in aperiam illo quae, delectus iure ipsum, sapiente asperiores. Sapiente non labore quos laudantium dignissimos a. Adipisci facere ad incidunt illo nostrum voluptatum numquam illum consectetur!
      </p>
      <p>        
        Quasi, quidem laboriosam odio, eos eum, voluptatibus voluptatem fugit sapiente aliquam exercitationem tempora cum eaque molestias omnis amet aspernatur magnam. Ullam ipsam, animi est velit vitae dicta ipsa sequi repudiandae.
      </p>
    </HelmetProvider>
  )
};

export default Home;