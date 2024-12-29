<?php

namespace App\Service;

use App\DTO\RegistrationDTO;
use App\Entity\Registration;
use App\Repository\RegistrationRepository;
use Doctrine\ORM\EntityManagerInterface;

class RegistrationService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private RegistrationRepository $repository
    ) {}

    public function createRegistration(RegistrationDTO $dto): array
    {
        $registration = new Registration();
        $registration
            ->setParentLastName($dto->parentLastName)
            ->setParentFirstName($dto->parentFirstName)
            ->setEmail($dto->email)
            ->setPhone($dto->phone)
            ->setChildLastName($dto->childLastName)
            ->setChildFirstName($dto->childFirstName)
            ->setBirthDate(new \DateTime($dto->birthDate))
            ->setStartDate(new \DateTime($dto->startDate))
            ->setComments($dto->comments);

        $this->entityManager->persist($registration);
        $this->entityManager->flush();

        return [
            'id' => $registration->getId(),
            'createdAt' => $registration->getCreatedAt()->format('c')
        ];
    }
}