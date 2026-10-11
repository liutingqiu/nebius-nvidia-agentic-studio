import { NemotronModelTier, ModelRoutingConfig, AgentTaskRequest, AgentExecutionResult } from '../types.js';
export declare const NEMOTRON_ROUTING_TABLE: Record<NemotronModelTier, ModelRoutingConfig>;
export declare class NebiusAgenticStudioEngine {
    /**
     * Intelligently routes tasks to the optimal NVIDIA Nemotron model tier
     * hosted on Nebius Token Factory based on cognitive complexity and token economy.
     */
    static selectOptimalTier(task: AgentTaskRequest): NemotronModelTier;
    /**
     * Simulates Nebius Serverless Job execution and outputs validated code artifacts.
     */
    static executeAgentTask(task: AgentTaskRequest): AgentExecutionResult;
}
