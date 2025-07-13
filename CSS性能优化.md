# CSS性能优化策略

## 问题分析

原始代码中的CSS资源加载方式：
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@5.26.1/dist/reset.css">
```

这种同步加载方式会：
1. **阻塞首次内容绘制（FCP）**
2. **延迟页面渲染**
3. **影响用户体验**

## 优化策略

### 1. 异步加载CSS

**原理**：使用 `media="print"` 和 `onload` 事件实现异步加载

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@5.26.1/dist/reset.css" 
      media="print" onload="this.media='all'">
```

**优势**：
- 不阻塞页面渲染
- 保持CSS加载功能
- 兼容性好

### 2. 预加载策略

**原理**：使用 `<link rel="preload">` 提前加载CSS

```html
<link rel="preload" href="https://cdn.jsdelivr.net/npm/antd@5.26.1/dist/reset.css" 
      as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@5.26.1/dist/reset.css">
</noscript>
```

**优势**：
- 高优先级加载
- 提供noscript回退
- 更好的加载控制

### 3. 关键CSS内联

**原理**：将关键CSS直接内联到HTML中

```html
<style>
/* 关键CSS内容 */
body { margin: 0; }
.container { max-width: 1200px; }
</style>
```

**优势**：
- 立即生效
- 减少网络请求
- 提升首屏渲染速度

## 实现方案

### 插件配置

```typescript
// vite.config.ts
CdnInjectPlugin({
  cssStrategy: 'async', // 使用异步加载
}),
CssOptimizePlugin({
  strategy: 'async',
  preloadNonCritical: true,
  addPerformanceMonitoring: true
}),
```

### 性能监控

插件会自动添加性能监控脚本：

```javascript
// CSS加载性能监控
(function() {
  const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
  cssLinks.forEach(link => {
    const startTime = performance.now();
    link.addEventListener('load', () => {
      const loadTime = performance.now() - startTime;
      console.log('CSS loaded:', link.href, 'Time:', loadTime.toFixed(2) + 'ms');
    });
  });
})();
```

## 性能提升效果

### 优化前
- CSS同步加载，阻塞渲染
- 首次内容绘制延迟
- 用户体验较差

### 优化后
- CSS异步加载，不阻塞渲染
- 首次内容绘制提前
- 用户体验显著改善

## 最佳实践

1. **选择合适的策略**：
   - 关键CSS：使用内联
   - 非关键CSS：使用异步加载
   - 大型CSS：使用预加载

2. **监控性能**：
   - 使用性能监控脚本
   - 定期检查加载时间
   - 优化加载策略

3. **兼容性考虑**：
   - 提供noscript回退
   - 测试不同浏览器
   - 确保功能正常

## 进一步优化建议

1. **CDN优化**：
   - 使用更快的CDN
   - 启用HTTP/2
   - 启用Gzip压缩

2. **缓存策略**：
   - 设置合适的缓存头
   - 使用版本化文件名
   - 实现缓存更新机制

3. **代码分割**：
   - 按需加载CSS
   - 分离关键和非关键CSS
   - 优化CSS体积 