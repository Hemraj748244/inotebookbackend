{ pkgs }: {
	deps = [
		pkgs.mongodb-3_4
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}