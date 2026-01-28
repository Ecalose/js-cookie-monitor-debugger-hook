/**
 * 设置视图样式
 */
export const settingsStyles = `
    /* 设置视图容器 */
    .jscookie-settings-view {
        padding-bottom: 16px;
    }
    
    /* 设置表单 */
    .jscookie-settings-form {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    /* 表单提示文本 */
    .jscookie-form-hint {
        color: #718096;
        font-size: 13px;
        margin-left: 8px;
        font-weight: 500;
    }
    
    /* 输入框组合 */
    .jscookie-input-group {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .jscookie-input-group input {
        flex: 1;
    }
    
    /* 数字输入框特殊样式 */
    input[type="number"] {
        max-width: 120px;
    }
    
    /* 选择框样式 */
    select {
        appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 8px center;
        background-repeat: no-repeat;
        background-size: 16px;
        padding-right: 32px;
    }
    
    /* 复选框样式美化 */
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        border-radius: 6px;
        border: 2px solid #cbd5e0;
        background-color: #fff;
        cursor: pointer;
        position: relative;
        transition: all 0.2s ease;
    }
    
    input[type="checkbox"]:checked {
        background-color: #4f7dff;
        border-color: #4f7dff;
    }
    
    input[type="checkbox"]:checked::before {
        content: '✓';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 12px;
        font-weight: 600;
    }
    
    input[type="checkbox"]:hover {
        border-color: #4f7dff;
        box-shadow: 0 0 0 3px rgba(79, 125, 255, 0.1);
    }
    
    /* 复选框行样式 */
    .jscookie-form-row.checkbox-row {
        background: #f8fafc;
        padding: 12px 16px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        transition: all 0.2s ease;
    }
    
    .jscookie-form-row.checkbox-row:hover {
        background: #f1f5f9;
        border-color: rgba(79, 125, 255, 0.2);
    }
    
    .jscookie-form-row.checkbox-row label {
        font-weight: 500;
        color: #4a5568;
        cursor: pointer;
        user-select: none;
    }
    
    /* 错误状态 */
    .jscookie-error {
        background: #fed7d7;
        color: #c53030;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #feb2b2;
        text-align: center;
        font-weight: 500;
    }
    
    /* 成功状态 */
    .jscookie-success {
        background: #c6f6d5;
        color: #2f855a;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #9ae6b4;
        text-align: center;
        font-weight: 500;
    }
    
    /* 信息提示 */
    .jscookie-info {
        background: #bee3f8;
        color: #2c5282;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #90cdf4;
        text-align: center;
        font-weight: 500;
    }
    
    /* 警告提示 */
    .jscookie-warning {
        background: #faf089;
        color: #744210;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #f6e05e;
        text-align: center;
        font-weight: 500;
    }
`;
