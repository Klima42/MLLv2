<?php

namespace App\Controller;

use App\DTO\RegistrationDTO;
use App\Exception\ValidationException;
use App\Service\RegistrationService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api')]
class RegistrationController extends AbstractController
{
    public function __construct(
        private RegistrationService $registrationService
    ) {}

    #[Route('/registrations', methods: ['POST'])]
    public function store(Request $request): Response
    {
        try {
            $data = json_decode($request->getContent(), true);
            if (!$data) {
                return $this->json(['error' => 'Invalid JSON'], Response::HTTP_BAD_REQUEST);
            }

            $dto = RegistrationDTO::fromArray($data);
            $result = $this->registrationService->createRegistration($dto);

            return $this->json([
                'message' => 'Registration submitted successfully',
                'data' => $result
            ], Response::HTTP_CREATED);

        } catch (ValidationException $e) {
            return $this->json([
                'message' => 'Validation failed',
                'errors' => $e->getErrors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (\Throwable $e) {
            return $this->json([
                'message' => 'An error occurred while processing your request'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}