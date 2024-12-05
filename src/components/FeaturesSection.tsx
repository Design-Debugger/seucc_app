import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Workshops',
    description: 'Hands-on sessions to enhance your skills',
  },
  {
    title: 'Competitions',
    description: 'Showcase your talent and win exciting prizes',
  },
  {
    title: 'Networking',
    description: 'Connect with like-minded individuals and professionals',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 