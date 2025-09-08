# Architecture

This repo uses Hardhat for development, testing, and deployment.

- **contracts/**: Solidity source (0.8.24, OZ v5).
- **scripts/**: Deployment scripts using ethers v6 via hardhat-toolbox.
- **test/**: Unit tests with mocha/chai.
- **.github/workflows/**: CI to compile, test, and lint on PRs.
- **.devcontainer/**: Codespaces container (Node 20).

Security notes:
- Private keys are injected via `.env` and never committed.
- Use separate accounts for development/testnet/mainnet.
