function StepsCard({ recipe, title }) {
  return (
    <>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl font-bold">{title}</h1>
            <hr className="my-6" />
            {recipe.length !== 0 ? (
              <div className="pl-8">
                <ol className="list-decimal">
                  {recipe.steps.map((step, index) => {
                    // console.log();
                    return (
                      <li key={index} className="pb-2 marker:font-bold">
                        {step.step}
                      </li>
                    );
                  })}
                </ol>
              </div>
            ) : (
              <h2>Recipe not found</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default StepsCard;
