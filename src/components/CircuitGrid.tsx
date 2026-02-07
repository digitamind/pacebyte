/**
 * CircuitGrid — a fixed, full-viewport tech background.
 * Subtle "data pulse" streaks travel across the viewport, evoking
 * data flowing through a network.
 *
 * Renders once, zero re-renders, zero JS animation logic.
 */

const dataPulses = [
    { axis: 'h' as const, top: '20%', delay: '0s', duration: '18s' },
    { axis: 'h' as const, top: '60%', delay: '6s', duration: '22s' },
    { axis: 'v' as const, left: '40%', delay: '3s', duration: '20s' },
];

export const CircuitGrid = () => {
    return (
        <div
            className="fixed inset-0 z-10 pointer-events-none"
            aria-hidden="true"
        >
            {/* Data pulse streaks */}
            {dataPulses.map((pulse, index) =>
                pulse.axis === 'h' ? (
                    <div
                        key={`pulse-${index}`}
                        className="absolute h-px data-pulse-h"
                        style={{
                            top: pulse.top,
                            left: 0,
                            width: '40px',
                            background: 'linear-gradient(to right, transparent, rgba(0, 212, 255, 0.5), transparent)',
                            animationDelay: pulse.delay,
                            animationDuration: pulse.duration,
                        }}
                    />
                ) : (
                    <div
                        key={`pulse-${index}`}
                        className="absolute w-px data-pulse-v"
                        style={{
                            left: pulse.left,
                            top: 0,
                            height: '40px',
                            background: 'linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.5), transparent)',
                            animationDelay: pulse.delay,
                            animationDuration: pulse.duration,
                        }}
                    />
                )
            )}
        </div>
    );
};
