// This hook is used to handle PWA installation. It handles the beforeinstallprompt
// event so you don't have to, and exposes nice tools such as a launch/install
// button.
import React, {useState, useEffect} from 'react';

function usePwaInstall() {

  const [installEvent, saveInstallEvent] = useState(null);
  const [installationState, updateInstallationState] = useState('before');

  useEffect(() => {
    const saveEventHandler = e => {
      saveInstallEvent(e);
    }
    const installationFinishedHandler = e => {
      updateInstallationState('installed');
    }

    window.addEventListener('beforeinstallprompt ', saveEventHandler);
    window.addEventListener('appinstalled', installationFinishedHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt ', saveEventHandler);
      window.addEventListener('appinstalled', installationFinishedHandler);
    }
  }, []);

  const triggerInstall = e => {
    if(!!installEvent) {
      installEvent.prompt();
      installEvent.userChoice.then(result => updateInstallationState(result.outcome === 'accepted' ? 'installing' : 'rejected'));
    }
  }

  const installationPrompt = (<button onClick={triggerInstall}>Install</button>);

  const installationStatus = (
    <div className="install-status">
      {installationState === 'before' && !installEvent && "Not installable"}
      {installationState === 'before' && !!installEvent && "Ready to install"}
      {installationState === 'installing' && "Installing Maze"}
      {installationState === 'installed' && "Maze installation complete"}
    </div>
  );

  return [installationPrompt, installationStatus];
}

export default usePwaInstall;