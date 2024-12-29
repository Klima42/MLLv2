<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'registrations')]
class Registration
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private string $parentLastName;

    #[ORM\Column(length: 255)]
    private string $parentFirstName;

    #[ORM\Column(length: 255)]
    private string $email;

    #[ORM\Column(length: 20)]
    private string $phone;

    #[ORM\Column(length: 255)]
    private string $childLastName;

    #[ORM\Column(length: 255)]
    private string $childFirstName;

    #[ORM\Column(type: 'date')]
    private \DateTimeInterface $birthDate;

    #[ORM\Column(type: 'date')]
    private \DateTimeInterface $startDate;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $comments = null;

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    // Getters and setters
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getParentLastName(): string
    {
        return $this->parentLastName;
    }

    public function setParentLastName(string $parentLastName): self
    {
        $this->parentLastName = $parentLastName;
        return $this;
    }

    // Add other getters and setters...

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }
}