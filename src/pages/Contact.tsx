import coronaImage from "../assets/corona.svg";

const Contact = () => {
  return (
    <div className="container-fluid flex flex-col text-center  md:min-h-[calc(100vh-80px)] mt-[125px]">
      <div>
        <div className="relative mb-32 flex justify-center">
          <img src={coronaImage} alt="" className="absolute top-0 ml-72 w-40" />
        </div>
        <h1 className="text-7xl text-primary font-poppins font-bold whitespace-nowrap w-min-{320}">
          BURGER
        </h1>
      </div>
      <div className="container-fluid flex flex-row columns-2 justify-center pt-5">
        <div className="container overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8320.55751373594!2d-74.17950832372362!3d4.593963848782315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1727209940284!5m2!1ses!2sco"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[calc((100vw/2)-300px)] shadow-lg"
          />
        </div>
        <div className="container">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-left text-xl font-medium text-gray-700"
              >
                Correo <span className="text-primary font-bold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="fullName"
                className="block text-left text-lg font-medium text-gray-700"
              >
                Nombres Completos{" "}
                <span className="text-primary font-bold">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-left text-lg font-medium text-gray-700"
              >
                Número Teléfono{" "}
                <span className="text-primary font-bold">*</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left text-lg font-medium text-gray-700"
              >
                Mensaje <span className="text-primary font-bold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={10}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-lg"
                required
              />
            </div>
            <div className="pt-5">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-20 border border-transparent shadow-sm text-lg font-medium rounded-xl text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
