function ErrorPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <h1 className="text-8xl text-gray-500">404</h1>
          <h2 className="text-2xl text-black-500">
            The page you are looking for doesn&apos;t exist.
          </h2>
          <p className="leading-relaxed text-lg">
            You might have mistyped the address or the page may have moved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
