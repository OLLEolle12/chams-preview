const features = {
  "legit": ["Aimbot", "Triggerbot", "Recoil Control", "Smooth Aim"],
  "rage": ["Silent Aim", "Auto Wall", "Hitbox Override", "Resolver"],
  "anti-aim": ["Pitch Jitter", "Yaw Desync", "Spinbot", "Fake Flick"],
  "visuals": ["Box ESP", "Health Bar", "Glow", "Skeleton"],
  "misc": ["Bhop", "Auto Strafe", "Fake Lag", "Hit Sound"],
  "skins": ["Knife Changer", "Weapon Skins", "Wear Changer", "Seed Editor"],
  "settings": ["Save Config", "Load Config", "Reset All", "Export JSON"],
  "players": ["Player List", "Target Override", "Friend/Enemy Toggle"],
  "lua": ["Load Script", "Unload Script", "Console Print", "Hook Events"]
};

function showTab(tab) {
  const contentDiv = document.getElementById("tab-content");
  const title = document.getElementById("tab-title");
  title.innerText = tab.charAt(0).toUpperCase() + tab.slice(1);

  const items = features[tab].map(f => `<li>${f}</li>`).join("");
  contentDiv.innerHTML = `<ul>${items}</ul>`;
}

// Default tab
showTab("rage");
