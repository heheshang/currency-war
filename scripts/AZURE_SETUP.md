# Azure 语音服务注册指南

## 注册步骤

### 1. 注册 Azure 账号
1. 访问 https://azure.microsoft.com/
2. 点击"免费开始"或"注册"
3. 使用 Microsoft 账号登录
4. 需要信用卡验证（免费账户有每月免费额度）

### 2. 创建语音服务资源
1. 登录 Azure 门户: https://portal.azure.com/
2. 点击"创建资源"
3. 搜索"语音" (Speech)
4. 选择"语音服务"
5. 填写信息:
   - **订阅**: 选择你的订阅
   - **资源组**: 新建或选择现有
   - **区域**: 建议选择 `East US` (美东) 或 `Southeast Asia` (东南亚)
   - **名称**: 任意名称，如 `currency-war-tts`
   - **定价层**: 选择 `Free F0` (免费)
6. 点击"创建"

### 3. 获取 API 密钥
1. 资源创建完成后，点击"转到资源"
2. 在左侧菜单找到"密钥和终结点"
3. 复制 **KEY 1** 或 **KEY 2**

### 4. 设置环境变量

在终端中运行:
```bash
# macOS/Linux
export AZURE_SPEECH_KEY="你的密钥"
export AZURE_SPEECH_REGION="eastus"

# Windows (CMD)
set AZURE_SPEECH_KEY=你的密钥
set AZURE_SPEECH_REGION=eastus
```

### 5. 测试配音生成

```bash
# 测试语音
python3 scripts/generate_voiceover_azure.py --test "货币战争"

# 生成第01集配音
python3 scripts/generate_voiceover_azure.py --episode 01
```

---

## 免费额度

| 项目 | 免费额度 (F0) |
|------|---------------|
| 语音转文本 | 每月 5000 分钟 |
| 文本转语音 | 每月 5000 分钟 |
| 声音克隆 | 每月 15 个自定义端点 |

**足够生成多集配音！**

---

## 常见问题

### Q: 需要付费吗？
A: 免费层 (F0) 每月有 5000 分钟额度，足够个人项目使用。

### Q: 支持中文吗？
A: 是的，Azure 支持多种中文语音。

### Q: 语音有哪些选择？
A: 运行以下命令查看:
```bash
python3 scripts/generate_voiceover_azure.py --list
```

---

## 快速测试

注册完成后，运行:

```bash
# 测试
python3 scripts/generate_voiceover_azure.py --test "货币战争"
```
