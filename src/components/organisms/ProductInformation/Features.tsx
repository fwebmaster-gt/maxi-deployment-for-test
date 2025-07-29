type FeaturesProps = {
  features: string[];
};

const Features = ({ features }: FeaturesProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Características
      </h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-secondary-600"></div>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
