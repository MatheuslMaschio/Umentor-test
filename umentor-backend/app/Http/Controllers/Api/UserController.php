<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * Retorna uma lista paginada de usuários.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
{
    try {
        $users = User::orderBy('id', 'DESC')->get(); // Use get() para obter todos os usuários

        return response()->json([
            'status' => true,
            'users' => $users, 
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'status' => false,
            'message' => "Erro ao buscar usuários! Erro: " . $e->getMessage(),
        ], 500); 
    }
}

    /**
     * Exibe os detalhes de um usuário específico.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(User $user): JsonResponse
    {
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Usuário não encontrado.',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'user' => $user,
        ], 200);
    }

    /**
     * Cria novo usuário com os dados fornecidos na requisição.
     *
     * @param  \App\Http\Requests\UserRequest 
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(UserRequest $request): JsonResponse
{
    DB::beginTransaction();

    try {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'situation' => $request->situation ?? 'Ativo',
            'admission_date' => $request->admission_date,
        ]);

        DB::commit();

        return response()->json([
            'status' => true,
            'user' => $user,
            'message' => "Usuário cadastrado com sucesso!",
        ], 201);
    } catch (Exception $e) {
        DB::rollBack();

        return response()->json([
            'status' => false,
            'message' => "Usuário não foi cadastrado! Erro: " . $e->getMessage(),
        ], 400);
    }
}

    /**
     * Atualiza os dados de um usuário existente.
     *
     * @param  \App\Http\Requests\UserRequest $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UserRequest $request, User $user): JsonResponse
{
    DB::beginTransaction();

    try {
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'situation' => $request->situation,
            'admission_date' => $request->admission_date,
        ]);

        DB::commit();

        return response()->json([
            'status' => true,
            'user' => $user,
            'message' => "Usuário atualizado com sucesso!",
        ], 200);
    } catch (Exception $e) {
        DB::rollBack();

        return response()->json([
            'status' => false,
            'message' => "Usuário não foi editado! Erro: " . $e->getMessage(),
        ], 400);
    }
}


    /**
     * Exclui usuário no banco de dados.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(User $user): JsonResponse
    {
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Usuário não encontrado.',
            ], 404);
        }

        try {
            $user->delete();

            return response()->json([
                'status' => true,
                'user' => $user,
                'message' => "Usuário excluído com sucesso!",
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => "Usuário não foi excluído! Erro: " . $e->getMessage(),
            ], 400);
        }
    }
}
