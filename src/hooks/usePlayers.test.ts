// @vitest-environment jsdom

import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Player } from '../types';
import { usePlayers } from './usePlayers';

describe('usePlayers', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('should initialize with empty players array', () => {
    const { result } = renderHook(() => usePlayers());
    expect(result.current.players).toEqual([]);
  });

  it('should add player to players array', () => {
    const newPlayer: Player = { name: 'John Doe', skill: 5 };
    const { result } = renderHook(() => usePlayers());
    act(() => {
      result.current.addPlayer(newPlayer);
    });
    expect(result.current.players).toEqual([newPlayer]);
  });

  it('should remove player from players array', () => {
    const playerToRemove: Player = { name: 'John Doe', skill: 5 };
    const { result } = renderHook(() => usePlayers());
    act(() => {
      result.current.addPlayer(playerToRemove);
      result.current.removePlayer(playerToRemove.name);
    });
    expect(result.current.players).toEqual([]);
  });

  it('should not add player with same name to players array', () => {
    const existingPlayer: Player = { name: 'John Doe', skill: 5 };
    const newPlayer: Player = { name: 'John Doe', skill: 6 };
    const { result } = renderHook(() => usePlayers());
    act(() => {
      result.current.addPlayer(existingPlayer);
    });
    act(() => {
      result.current.addPlayer(newPlayer);
    });
    expect(result.current.players).toHaveLength(1);

  });


});
