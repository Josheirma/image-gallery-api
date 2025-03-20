#!/bin/bash

# Stop script on errors (will temporarily disable for rebase conflict handling)
set -e

# Prompt for the feature branch name
read -p "Enter the feature branch name: " feature_branch

if [ -z "$feature_branch" ]; then
  echo "Feature branch name cannot be empty. Exiting."
  exit 1
fi

# Verify if the branch exists locally
if ! git show-ref --verify --quiet "refs/heads/$feature_branch"; then
  echo "Branch '$feature_branch' does not exist locally. Exiting."
  exit 1
fi

# Switch to main and pull the latest changes
echo "Switching to main branch..."
git checkout main

echo "Pulling latest changes from origin/main..."
git pull origin main || { echo "Failed to pull changes from origin/main. Exiting."; exit 1; }

# Switch to feature branch
echo "Switching to feature branch '$feature_branch'..."
git checkout "$feature_branch" || { echo "Failed to switch to '$feature_branch'. Exiting."; exit 1; }

# Start the rebase
echo "Rebasing '$feature_branch' onto 'main'..."
set +e
git rebase main
rebase_status=$?
set -e

# Handle rebase conflicts
while [ $rebase_status -ne 0 ]; do
  echo ""
  echo "⚠️  Conflicts detected during rebase! Please resolve them manually."
  echo "Once resolved, the script will automatically stage all changes and continue the rebase."
  echo ""
  
  # Automatically stage all changes
  git add .

  echo "Automatically staged all changes."
  
  # Continue rebase after conflict resolution
  set +e
  git rebase --continue
  rebase_status=$?
  set -e
done

echo ""
echo "✅ Rebase completed successfully."

# Confirm force-push
read -p "Do you want to force-push the rebased '$feature_branch' to remote? (y/N): " confirm_push
if [[ "$confirm_push" =~ ^[Yy]$ ]]; then
  echo "Force-pushing the rebased feature branch..."
  git push -f
else
  echo "Skipping push. Remember to push manually if needed."
fi

echo ""
echo "Final git status:"
git status
