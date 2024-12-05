interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard; 