import { afterNavigate } from '$app/navigation';

export function CountPageVisit() {
	return afterNavigate(() => {
		if (window.goatcounter) {
			window.goatcounter.count({
				path: location.pathname + location.search + location.hash
			});
		}
	});
}
