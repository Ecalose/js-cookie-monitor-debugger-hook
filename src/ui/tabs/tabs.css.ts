/**
 * 标签页样式
 */
export const tabsStyles = `
    /* 标签页导航 */
    .jscookie-tabs-nav {
        display: flex;
        overflow-x: auto;
        background: linear-gradient(to bottom, #ffffff, #f8f9fa);
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        position: relative;
    }

    /* 隐藏滚动条但保留功能 */
    .jscookie-tabs-nav::-webkit-scrollbar {
        height: 0;
    }

    /* 标签按钮 */
    .jscookie-tab-btn {
        padding: 14px 20px;
        background: none;
        border: none;
        font-size: 14px;
        font-weight: 500;
        color: #6b7280;
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 8px 8px 0 0;
        margin: 0 2px;
    }

    /* 图标样式 */
    .jscookie-tab-btn i {
        margin-right: 8px;
        font-size: 14px;
        transition: transform 0.2s ease;
    }

    .jscookie-tab-btn:hover {
        color: #4f7dff;
        background: linear-gradient(to bottom, rgba(79, 125, 255, 0.05), rgba(79, 125, 255, 0.02));
        transform: translateY(-1px);
    }

    .jscookie-tab-btn:hover i {
        transform: scale(1.1);
    }

    /* 活动标签按钮 */
    .jscookie-tab-btn.active {
        color: #4f7dff;
        background: linear-gradient(to bottom, #ffffff, #f8fafc);
        box-shadow:
            0 -2px 8px rgba(79, 125, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        font-weight: 600;
    }

    /* 活动标签下划线 */
    .jscookie-tab-btn.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 3px;
        background: linear-gradient(to right, #4f7dff, #6a8fff);
        border-radius: 2px 2px 0 0;
        box-shadow: 0 -1px 3px rgba(79, 125, 255, 0.3);
    }
    
    /* 标签内容容器 */
    .jscookie-tabs-content {
        height: 100%;
        overflow: auto;
        background-color: #ffffff;
        position: relative;
    }

    /* 标签面板 */
    .jscookie-tab-panel {
        padding: 24px;
        display: none;
        height: 100%;
        overflow: auto;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    /* 活动标签面板 */
    .jscookie-tab-panel.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
        animation: jscookie-fadeInPanel 0.3s ease forwards;
    }

    @keyframes jscookie-fadeInPanel {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* 视图标题样式 */
    .jscookie-view-header {
        margin-bottom: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        padding-bottom: 16px;
    }

    .jscookie-view-header h3 {
        font-size: 18px;
        font-weight: 600;
        color: #2d3748;
        margin: 0 0 8px 0;
    }

    .jscookie-description {
        color: #718096;
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
    }

    /* 表单部分标题 */
    .jscookie-form-section {
        margin-bottom: 24px;
        background: #f8fafc;
        padding: 16px;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .jscookie-form-section h4 {
        font-size: 16px;
        font-weight: 600;
        color: #4a5568;
        margin: 0 0 16px 0;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
`;