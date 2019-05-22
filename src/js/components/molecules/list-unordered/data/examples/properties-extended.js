export const items = [
    'Industrial-grade impact and abrasion resistance',
    'Durable',
    'High strength-to-weight ratio',
    'Low friction coefficient',
    'Good corrosion resistance to alkalis and organic chemicals',
    'Reduced humidity absorption when compared to other Nylon filaments',
    'Seamless 3D printing experience',
    'Prints in dual extrusion with PVA or Breakaway',
];

export const itemLabels = items.map(
    item => ({
        item: {
            item: {
                item,
            },
            type: 'SpanLabel',
        },
    }),
);
