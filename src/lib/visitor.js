import { afterNavigate } from '$app/navigation';

export function CountPageVisit() {
	return afterNavigate(() => {
		try {
			window.goatcounter.count({
				path: location.pathname + location.search + location.hash
			});
		} catch {
			console.debug('Error sending analytics');
		}
	});
}
