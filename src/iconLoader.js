export async function loadWeatherIcon(iconName) {
    try {
        const icon = await import( /* webpackMode: "lazy-once" */
            `./icons/${iconName}.png`);
        return icon.default;
    } catch (err) {
        console.warn(`No icon found for: ${iconName}, using fallback.`);
        const fallback = await import(`./icons/default.png`);
        return fallback.default;
    }
}