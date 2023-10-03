# App Version Number

This action generates a version number for your app. It uses the current date and time to generate the version number.

## Usage

```yaml
steps:
  - name: Generate
    id: generate
    uses: AcmeSoftwareLLC/app-version-number@v1
    with:
      timezone: Asia/Kathmandu

  - name: Display the generated build number
    run: echo "Build Number > ${{ steps.generate.outputs.build-number }}"
```