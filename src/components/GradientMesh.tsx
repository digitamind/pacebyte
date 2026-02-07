interface GradientMeshProps {
  intensity?: 'normal' | 'strong';
  className?: string;
}

export const GradientMesh = ({ intensity = 'normal', className = '' }: GradientMeshProps) => {
  const gradientClass = intensity === 'strong' ? 'bg-gradient-mesh-strong' : 'bg-gradient-mesh';

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 ${gradientClass} animate-gradient-mesh-bg`}
        style={{ backgroundSize: '200% 200%' }}
      />
      {/* Animated gradient orbs — CSS-driven for compositor-thread performance */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-accent-cyan opacity-20 rounded-full blur-2xl animate-orb-cyan"
        style={{ transform: 'translateZ(0)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple opacity-20 rounded-full blur-2xl animate-orb-purple"
        style={{ transform: 'translateZ(0)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-green opacity-15 rounded-full blur-2xl animate-orb-green"
        style={{ transform: 'translateZ(0)' }}
      />
    </div>
  );
};
