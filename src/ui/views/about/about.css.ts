/**
 * 关于页面样式
 */
export const aboutStyles = `
    /* 关于页面容器 */
    .jscookie-about-view {
        padding-bottom: 16px;
    }
    
    /* 关于内容 */
    .jscookie-about-content {
        text-align: center;
        padding: 20px 0;
    }
    
    /* Logo区域 */
    .jscookie-about-logo {
        margin-bottom: 32px;
    }
    
    .jscookie-logo {
        font-size: 48px;
        margin-bottom: 16px;
        display: inline-block;
        animation: jscookie-logoFloat 3s ease-in-out infinite;
    }
    
    @keyframes jscookie-logoFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
    }
    
    .jscookie-about-logo h2 {
        font-size: 24px;
        font-weight: 700;
        color: #2d3748;
        margin: 0 0 8px 0;
        background: linear-gradient(135deg, #4f7dff, #6a8fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .jscookie-version {
        display: inline-block;
        background: linear-gradient(135deg, #4f7dff, #6a8fff);
        color: white;
        padding: 4px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 4px rgba(79, 125, 255, 0.3);
    }
    
    /* 描述文本 */
    .jscookie-about-description {
        font-size: 16px;
        line-height: 1.6;
        color: #4a5568;
        margin: 0 0 32px 0;
        text-align: left;
        background: #f8fafc;
        padding: 20px;
        border-radius: 12px;
        border-left: 4px solid #4f7dff;
    }
    
    /* 功能部分 */
    .jscookie-about-section {
        margin-bottom: 24px;
        text-align: left;
        background: #ffffff;
        padding: 20px;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
    }
    
    .jscookie-about-section h4 {
        font-size: 18px;
        font-weight: 600;
        color: #2d3748;
        margin: 0 0 16px 0;
        padding-bottom: 8px;
        border-bottom: 2px solid #e2e8f0;
        position: relative;
    }
    
    .jscookie-about-section h4::before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 40px;
        height: 2px;
        background: linear-gradient(to right, #4f7dff, #6a8fff);
        border-radius: 1px;
    }
    
    .jscookie-about-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .jscookie-about-section li {
        padding: 8px 0;
        color: #4a5568;
        line-height: 1.5;
        position: relative;
        padding-left: 24px;
    }
    
    .jscookie-about-section li::before {
        content: '✓';
        position: absolute;
        left: 0;
        top: 8px;
        color: #4f7dff;
        font-weight: 600;
        font-size: 14px;
    }
    
    .jscookie-about-section p {
        color: #4a5568;
        line-height: 1.6;
        margin: 0;
    }
    
    /* 作者信息 */
    .jscookie-author-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin-top: 32px;
        padding: 16px;
        background: #f8fafc;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .jscookie-author-info a {
        color: #4f7dff;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
    }
    
    .jscookie-author-info a:hover {
        color: #3b6af8;
        text-decoration: underline;
    }
    
    /* 版权信息 */
    .jscookie-copyright {
        text-align: center;
        color: #718096;
        font-size: 13px;
        margin-top: 24px;
        padding-top: 16px;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
`;
