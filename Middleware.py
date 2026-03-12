# myapp/middleware.py
class MyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # Initialize any attributes or dependencies here

    def __call__(self, request):
        # Code to run before the view (and later middleware)
        # You can modify the request object here

        response = self.get_response(request)

        # Code to run after the view (and earlier middleware)
        # You can modify the response object here

        return response
