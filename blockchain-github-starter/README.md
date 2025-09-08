# Blockchain GitHub Starter / 区块链仓库起步模板

> 一键起步：Hardhat + OpenZeppelin + CI（GitHub Actions）+ 代码规范（Prettier/Solhint）+ 文档模板。> 适合在 **iPad（通过 GitHub Codespaces）** 或 **Mac 本地** 开发。

## 快速开始（iPad / 浏览器：Codespaces）
1. 把本项目上传到你的 GitHub（或 fork）。
2. 在 GitHub 仓库页面点击 **Code → Codespaces → Create codespace on main**。
3. 终端执行：
   ```bash
   npm install
   npm run compile
   npm test
   npm run deploy:local
   ```

## 快速开始（Mac 本地）
1. 安装 Node.js（建议 v20+）与 Git：<https://nodejs.org/>
2. 克隆仓库并安装依赖：
   ```bash
   git clone <YOUR_REPO_URL>.git
   cd <YOUR_REPO_NAME>
   npm install
   npm run compile
   npm test
   ```
3. 部署到本地 Hardhat 网络：
   ```bash
   npx hardhat node &   # 可选：启动持久本地链
   npm run deploy:local
   ```

## 部署到测试网（例如 Sepolia）
1. 建 `.env` 文件（参考 `.env.example`）：
   ```ini
   PRIVATE_KEY=你的私钥（0x开头，无引号）
   RPC_URL=https://sepolia.infura.io/v3/你的KEY （或 Alchemy/其他RPC）
   TOKEN_NAME=MyToken
   TOKEN_SYMBOL=MTK
   TOKEN_SUPPLY=1000000
   ```
2. 执行：
   ```bash
   NETWORK=sepolia npm run deploy
   ```
   部署完成后会在终端打印合约地址。

## 目录结构
```
contracts/        # Solidity 合约（示例：ERC20）
scripts/          # 部署脚本
test/             # 单元测试（Hardhat + Chai）
docs/             # 文档：ROADMAP、ARCHITECTURE 等
.github/workflows # CI 工作流（自动编译与测试）
.devcontainer/    # Codespaces 环境（iPad/浏览器一键开发）
```
  
## 自带功能
- ✅ **ERC20 示例**（OpenZeppelin 5.x）
- ✅ **Hardhat** 项目脚手架（编译、测试、部署）
- ✅ **Solhint / Prettier** 代码规范
- ✅ **GitHub Actions** CI（编译 + 测试 + Lint）
- ✅ 文档与协作模板（CONTRIBUTING、SECURITY、Issue/PR 模板）

## 常用脚本
```bash
npm run compile     # 编译合约
npm test            # 跑测试
npm run deploy:local# 在内置 Hardhat 网络部署示例代币
NETWORK=sepolia npm run deploy  # 指定网络部署
npm run lint:sol    # Solidity 代码检查
npm run format      # Prettier 全仓库格式化
```

## 安全与合规
- 示例代码仅用于学习与演示，**不要**直接用于生产。
- 请务必使用 `.env` 管理私钥，并确保 `.env` 已加入 `.gitignore`（本模板已配置）。
- 负责任披露流程见 `SECURITY.md`。

---

**中文快速上手提示**：如果你在 iPad 上开发，推荐 **GitHub Codespaces**（本模板已内置 devcontainer）。如果你在 Mac 上，确保 `Node 20+`，然后 `npm install && npm test` 即可。

Happy hacking! 🚀
