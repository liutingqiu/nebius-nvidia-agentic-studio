// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import { NebiusAgenticStudioEngine, NEMOTRON_ROUTING_TABLE } from '../dist/index.js';

test('1. NEMOTRON_ROUTING_TABLE validates 3 tiers of NVIDIA open source models on Nebius', () => {
  const tiers = Object.keys(NEMOTRON_ROUTING_TABLE);
  assert.equal(tiers.length, 3);
  assert.deepEqual(tiers, ['NVIDIA_NEMOTRON_3_ULTRA', 'NVIDIA_NEMOTRON_SUPER', 'NVIDIA_NEMOTRON_NANO']);

  tiers.forEach(t => {
    const cfg = NEMOTRON_ROUTING_TABLE[t];
    assert.ok(cfg.modelIdentifier.startsWith('nvidia/'));
    assert.ok(cfg.contextWindowTokens >= 32768);
    assert.ok(cfg.costPer1kTokensUSD > 0);
  });
});

test('2. selectOptimalTier accurately balances reasoning depth against token cost', () => {
  const planTier = NebiusAgenticStudioEngine.selectOptimalTier({
    taskId: 'task-1',
    taskType: 'SYSTEM_PLANNING',
    prompt: 'Architect a 5-agent consensus DAG',
    tokenBudget: 8000
  });
  assert.equal(planTier, 'NVIDIA_NEMOTRON_3_ULTRA');

  const synthTier = NebiusAgenticStudioEngine.selectOptimalTier({
    taskId: 'task-2',
    taskType: 'CODE_SYNTHESIS',
    prompt: 'Write an ERC-20 paymaster',
    tokenBudget: 2000
  });
  assert.equal(synthTier, 'NVIDIA_NEMOTRON_SUPER');

  const fastTier = NebiusAgenticStudioEngine.selectOptimalTier({
    taskId: 'task-3',
    taskType: 'TEST_GENERATION',
    prompt: 'Generate unit tests',
    tokenBudget: 1000
  });
  assert.equal(fastTier, 'NVIDIA_NEMOTRON_NANO');
});

test('3. executeAgentTask produces valid serverless job ID, token usage, and code output', () => {
  const result = NebiusAgenticStudioEngine.executeAgentTask({
    taskId: 'job-99',
    taskType: 'CODE_SYNTHESIS',
    prompt: 'Synthesize automated trading router',
    tokenBudget: 5000
  });

  assert.equal(result.taskId, 'job-99');
  assert.equal(result.status, 'COMPLETED');
  assert.ok(result.nebiusServerlessJobId.startsWith('nebius-job-'));
  assert.ok(result.tokensConsumed > 0);
  assert.ok(result.executionCostUSD > 0);
  assert.ok(result.generatedCodeSnippet.includes('executeStrategy'));
});

test('4. Empty prompt raises an error', () => {
  assert.throws(() => {
    NebiusAgenticStudioEngine.executeAgentTask({
      taskId: 'fail-1',
      taskType: 'CODE_SYNTHESIS',
      prompt: '   ',
      tokenBudget: 1000
    });
  }, /Task prompt cannot be empty/);
});
