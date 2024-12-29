<?php

namespace App\Service;

use App\DTO\RegistrationDTO;
use App\Entity\Registration;
use App\Exception\ValidationException;
use App\Repository\RegistrationRepository;
use App\Validator\RegistrationValidator;

class RegistrationService
{
    public function __construct(
        private RegistrationRepository $repository,
        private RegistrationValidator $validator
    ) {}

    public function createRegistration(RegistrationDTO $dto): array
    {
        $errors = $this->validator->validate($dto);
        if (!empty($errors)) {
            throw new ValidationException($errors);
        }

        $registration = $this->createEntityFromDTO($dto);
        $this->repository->save($registration);

        return [
            'id' => $registration->getId(),
            'createdAt' => $registration->getCreatedAt()->format('c')
        ];
    }

    private function createEntityFromDTO(RegistrationDTO $dto): Registration
    {
        $registration = new Registration();
        $registration->setParentLastName($dto->parentLastName)
            ->setParentFirstName($dto->parentFirstName)
            ->setEmail($dto->email)
            ->setPhone($dto->phone)
            ->setChildLastName($dto->childLastName)
            ->setChildFirstName($dto->childFirstName)
            ->setBirthDate(new \DateTime($dto->birthDate))
            ->setStartDate(new \DateTime($dto->startDate));

        if ($dto->comments) {
            $registration->setComments($dto->comments);
        }

        return $registration;
    }
}