import { afterNavigate } from '$app/navigation';

/**
 * Count that the current location has been visited.
 */
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

export function CountNavigationAction(path) {
	try {
		window.goatcounter.count({
			path: path
		});
	} catch {
		console.debug('Error sending analytics for action');
	}
}
