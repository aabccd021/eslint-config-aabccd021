
with (import <nixpkgs> { });
mkShell {
  buildInputs = [
    nodePackages.pnpm
  ];
}
