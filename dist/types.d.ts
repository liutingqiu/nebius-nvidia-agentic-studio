export type NemotronModelTier = 'NVIDIA_NEMOTRON_3_ULTRA' | 'NVIDIA_NEMOTRON_SUPER' | 'NVIDIA_NEMOTRON_NANO';
export interface ModelRoutingConfig {
    tier: NemotronModelTier;
    modelIdentifier: string;
    contextWindowTokens: number;
    costPer1kTokensUSD: number;
    targetTask: 'DEEP_REASONING' | 'WORKFLOW_ORCHESTRATION' | 'FAST_STREAMING_EXECUTION';
}
export interface AgentTaskRequest {
    taskId: string;
    taskType: 'CODE_SYNTHESIS' | 'TEST_GENERATION' | 'SYSTEM_PLANNING';
    prompt: string;
    tokenBudget: number;
}
export interface AgentExecutionResult {
    taskId: string;
    modelUsed: string;
    tier: NemotronModelTier;
    reasoningStepsCount: number;
    generatedCodeSnippet: string;
    tokensConsumed: number;
    executionCostUSD: number;
    nebiusServerlessJobId: string;
    status: 'COMPLETED' | 'FAILED';
}
